import requests
from django.http import JsonResponse

API_KEY = "76bfb2d9709acc85ec6c6c1c6f7a81be"
BASE_URL = "https://api.themoviedb.org/3"

def search_movies(request):
    query = request.GET.get("query", "").strip()  # Trim extra spaces
    if not query:
        return JsonResponse({"error": "Query parameter is required"}, status=400)

    url = f"{BASE_URL}/search/movie?api_key={API_KEY}&query={query}"
    response = requests.get(url)
    return JsonResponse(response.json())
