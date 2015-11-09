from rest_framework import serializers

#load django and webapp models
from django.contrib.auth.models import *
from myapp.api.models import *

class ForumpostSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(read_only=True,slug_field='username')
    tags = serializers.SlugRelatedField(slug_field="name", many=True, queryset=Tag.objects.all())
    class Meta:
        model = Forumpost
        fields = ('id','title', 'content', 'author', 'promoted', 'likes', 'tags', 'url')

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id','name', 'url')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'url')