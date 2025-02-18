from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def index(request):
    return HttpResponse("Django API is running.")

urlpatterns = [
    path('', index, name="index"),  # Now '/' returns a response
    path('admin/', admin.site.urls),
    path('api/movies/', include('movies.urls')),  # This handles /api/movies/search/
]
