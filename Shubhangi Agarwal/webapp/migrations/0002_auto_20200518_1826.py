# Generated by Django 2.2 on 2020-05-18 12:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='email',
            field=models.CharField(max_length=64, primary_key=True, serialize=False),
        ),
    ]
