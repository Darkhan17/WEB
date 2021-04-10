from django.urls import path, re_path

from .views import product_detail,product_list,category_list,category_detail


urlpatterns = [
    path('products/', product_list),
    path('products/<int:product_id>/',product_detail),
    path('categories/',category_list),
    path('categories/<int:category_id>/',category_detail)
]