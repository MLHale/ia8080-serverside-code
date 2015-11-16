from rest_framework import serializers

#load django and webapp models
from django.contrib.auth.models import *
from myapp.api.models import *

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

    def validate_author(self, value):
        if not self.context['request'].user == value:
            raise serializers.ValidationError('You cannot create a post as another user')

        return value
    # def validate(self, data):
    #     if 'shit' in (data['title'] + data['content']):
    #         raise serializers.ValidationError('Post contains profanity')

    #     return data

    def validate(self, data):
        data['title'] = data['title'].replace('shit','****')
        data['content'] = data['content'].replace('shit','****')
        return data


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id','name', 'url')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'url')