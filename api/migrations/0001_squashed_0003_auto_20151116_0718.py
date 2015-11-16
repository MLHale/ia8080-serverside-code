# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings
import myapp.api.validators


class Migration(migrations.Migration):

    replaces = [(b'api', '0001_initial'), (b'api', '0002_auto_20151109_0831'), (b'api', '0003_auto_20151116_0718')]

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Forumpost',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=40)),
                ('content', models.TextField()),
                ('promoted', models.BooleanField(default=False)),
                ('likes', models.IntegerField(default=0)),
                ('author', models.ForeignKey(to=settings.AUTH_USER_MODEL, unique=True)),
            ],
            options={
                'verbose_name_plural': 'Forumposts',
            },
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(unique=True, max_length=20)),
            ],
            options={
                'verbose_name_plural': 'Tags',
            },
        ),
        migrations.AddField(
            model_name='forumpost',
            name='tags',
            field=models.ManyToManyField(to=b'api.Tag', blank=True),
        ),
        migrations.AlterField(
            model_name='forumpost',
            name='author',
            field=models.ForeignKey(to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='forumpost',
            name='content',
            field=models.TextField(),
        ),
    ]
