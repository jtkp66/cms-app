from django.contrib import admin

from .models import Task


class TaskAdmin(admin.ModelAdmin):
    list_display = ('id', 'casenumber', 'priority',
                    'due_date', 'task')
    list_display_links = ('id', 'casenumber')
    list_editable = ('priority',)
    search_fields = ('casenumber', 'priority')
    list_per_page = 25


admin.site.register(Task, TaskAdmin)
