# Generated by Django 3.1 on 2021-03-29 09:27

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0003_remove_restaurant_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurant',
            name='opening_hours_from',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='restaurant',
            name='opening_hours_to',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='phone',
            field=models.CharField(blank=True, max_length=17, validators=[django.core.validators.RegexValidator(message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.", regex='^\\+?1?\\d{9,15}$')]),
        ),
    ]
