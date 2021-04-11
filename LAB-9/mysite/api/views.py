from django.shortcuts import render
from django.http.response import JsonResponse
from .models import Company,Vacancy
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

@csrf_exempt
def companies_list(request):
    if request.method =="GET":
        companies = Company.objects.all()
        companies_json = [company.to_json() for company in companies]
        return JsonResponse(companies_json, safe=False)

def company_detail(request,company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message':str (e)},status=400)


    return JsonResponse(company.to_json())


def company_vacancies(request,company_id):
    try:
        vacancies = Vacancy.objects.filter(company=company_id)
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    except Company.DoesNotExist as e:
        return JsonResponse({{'message':str(e)}},status=400)

    return JsonResponse(vacancies_json, safe=False)

def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_detail(request,vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message':str (e)},status=400)


    return JsonResponse(vacancy.to_json())


def top_10_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)
