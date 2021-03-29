# Generated by Django 3.1 on 2021-03-28 17:04

from django.db import migrations, models
import restaurant.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
                ('category', models.CharField(blank=True, choices=[('1', 'Vegetarian'), ('2', 'Vegan'), ('3', 'Fast Food'), ('4', 'All you can eat')], max_length=2)),
                ('country', models.CharField(max_length=170, verbose_name='Country')),
                ('street', models.CharField(max_length=70, verbose_name='Street')),
                ('city', models.CharField(max_length=70, verbose_name='City')),
                ('zip_code', models.CharField(blank=True, max_length=70, verbose_name='ZIP / Postal code')),
                ('website', models.CharField(blank=True, max_length=70)),
                ('phone', models.CharField(max_length=20)),
                ('email', models.EmailField(blank=True, max_length=70)),
                ('price_level', models.CharField(choices=[('0', 'No information'), ('1', '$'), ('2', '$$'), ('3', '$$$')], default='0', max_length=2)),
                ('avatar', models.ImageField(blank=True, null=True, upload_to=restaurant.models.user_directory_path)),
                ('created', models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
    ]
