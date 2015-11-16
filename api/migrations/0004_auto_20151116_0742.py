# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20151116_0718'),
    ]

    operations = [
        migrations.AlterField(
            model_name='forumpost',
            name='content',
            field=models.TextField(),
        ),
    ]
