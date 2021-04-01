# Generated by Django 3.1 on 2021-04-01 08:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0002_restaurant_owner'),
        ('reviews', '0002_auto_20210401_0741'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='restaurant',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='restaurant_reviews', to='restaurant.restaurant'),
        ),
    ]