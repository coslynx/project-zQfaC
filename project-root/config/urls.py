from django.urls import path
from .api import fileUpload, dataProcessing, fileDownload

urlpatterns = [
    path('api/upload/', fileUpload, name='file_upload'),
    path('api/process/', dataProcessing, name='data_processing'),
    path('api/download/', fileDownload, name='file_download'),
]