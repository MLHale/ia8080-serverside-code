# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import myapp.api.models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20151109_0831'),
    ]

    operations = [
        migrations.AlterField(
            model_name='forumpost',
            name='content',
            field=models.TextField(),
        ),
    ]
