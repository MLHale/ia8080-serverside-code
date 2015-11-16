from rest_framework import serializers

#load django and webapp models
from django.contrib.auth.models import *
from myapp.api.models import *

from rest_framework import serializers


class ForumpostSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(slug_field='username', queryset=User.objects.all())
    tags = serializers.SlugRelatedField(slug_field="name", many=True, queryset=Tag.objects.all())
    class Meta:
        model = Forumpost
        fields = ('id','title', 'content', 'author', 'promoted', 'likes', 'tags', 'url')

    def validate_content(self, value):
        """
        Check that the content field doesn't contain the keyword javascript.
        """
        if "teststr" in value:
            raise serializers.ValidationError("string %s contains invalid 'teststr' string" % value)

        return value

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id','name', 'url')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'url')