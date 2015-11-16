# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import myapp.api.validators


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20151116_0742'),
    ]

    operations = [
        migrations.AlterField(
            model_name='forumpost',
            name='content',
            field=models.TextField(validators=[myapp.api.validators.removeJavascriptKeyword]),
        ),
    ]
