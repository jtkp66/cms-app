from rest_framework import routers
from .api import CaseViewSet

router = routers.DefaultRouter()
router.register('api/cases', CaseViewSet, 'cases')

urlpatterns = router.urls