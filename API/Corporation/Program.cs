using Corporation;
using Corporation.Interfaces;
using Corporation.Services;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);
var myPolicy = "MyPolicy";

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddSingleton<IEmployeeService, EmployeeBaseService>();
builder.Services.AddSingleton<IDepartmentService, DepartmentBaseService>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCors(c =>
	c.AddPolicy(name: myPolicy, policy => policy.AllowAnyHeader().WithOrigins("http://localhost:3000")));
builder.Services.AddSwaggerGen(c => c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" }));
builder.Services.AddDbContext<ApplicationDbContext>();
builder.Services
	.AddGraphQLServer()
	.RegisterDbContext<ApplicationDbContext>()
	.AddQueryType(q => q.Name("Query"))
	.AddType<DepartmentQuery>()
	.AddType<EmployeeQuery>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
	app.UseExceptionHandler("/Home/Error");
	// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
	app.UseHsts();
}

app.UseCors(myPolicy);
app.UseSwagger();
app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1"));
app.UseHttpsRedirection();
app.UseStaticFiles();
app.MapGraphQL();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
	name: "default",
	pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();