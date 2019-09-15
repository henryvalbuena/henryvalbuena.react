import json

from django.http import JsonResponse

from .models import Project

# Create your views here.
def projects(request):
    projects = list()
    try:
        for project in Project.objects.all():
          projects.append({
            'name': project.name,
            'title': project.title,
            'meta': project.meta,
            'desc': project.desc,
            'detail': project.detail,
            'img': project.img,
            'src': project.src,
          })
    except Exception:
        print('Error')
    return JsonResponse({'projects': projects})
