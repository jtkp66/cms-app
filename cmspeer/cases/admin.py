from django.contrib import admin

from .models import Case


class CaseAdmin(admin.ModelAdmin):
    list_display = ('id', 'casenumber', 'is_published',
                    'status', 'assigned_date')
    list_display_links = ('id', 'casenumber')
    list_editable = ('is_published',)
    search_fields = ('casenumber', 'status')
    list_per_page = 25


admin.site.register(Case, CaseAdmin)
