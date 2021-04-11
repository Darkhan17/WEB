from django.urls import path, re_path

from .views import companies_list,company_detail,vacancies_list,vacancy_detail,top_10_vacancies,company_vacancies


urlpatterns = [
    path('companies/', companies_list),
    path('companies/<int:company_id>/',company_detail),
    path('companies/<int:company_id>/vacancies/',company_vacancies),
    path('vacancies/',vacancies_list),
    path('vacancies/<int:vacancy_id>/',vacancy_detail),
    path('vacancies/top_ten/', top_10_vacancies)
]