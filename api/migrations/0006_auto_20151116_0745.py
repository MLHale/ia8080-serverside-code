# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20151116_0744'),
    ]

    operations = [
        migrations.AlterField(
            model_name='forumpost',
            name='content',
            field=models.TextField(),
        ),
    ]
