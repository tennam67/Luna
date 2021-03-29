# Generated by Django 3.1 on 2021-03-29 12:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0006_auto_20210329_1038'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurant',
            name='categories',
            field=models.CharField(choices=[('0', 'No categories'), ('1', 'Vegan'), ('2', 'Vegetarian'), ('3', 'Fast food'), ('4', 'All you can eat'), ('5', 'Traditional'), ('6', 'Haute cuisine'), ('7', 'Kebab')], default='0', max_length=2),
        ),
    ]
