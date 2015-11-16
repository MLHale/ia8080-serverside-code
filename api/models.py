from django.db import models
from django.contrib.auth.models import User
from django.contrib import admin
from myapp.api.validators import *

# Create your models here.
class Tag(models.Model):
    """
    This is a tag for user submitted post entries.
    """
    name = models.CharField(max_length=20, blank=False, unique=True)
    def __str__(self):
        return str(self.id) +":"+self.name

    class Meta:
        verbose_name_plural = "Tags"

class TagAdmin(admin.ModelAdmin):
    list_display = ('name',)

class Forumpost(models.Model):
    """
    This is a forum post for storing user submitted post entries.
    """
    title = models.CharField(max_length=40, blank=False)
    content = models.TextField(blank=False, validators=[removeJavascriptKeyword])
    author = models.ForeignKey(User)
    promoted = models.BooleanField(default=False)
    likes = models.IntegerField(default=0)
    tags = models.ManyToManyField('tag', blank=True)

    class Meta:
        #This will be used by the admin interface
        verbose_name_plural = "Forumposts"

class ForumpostAdmin(admin.ModelAdmin):
    #This inner class indicates to the admin interface how to display a post
    #See the Django documentation for more information
    list_display = ('title', 'content', 'author', 'promoted', 'likes')