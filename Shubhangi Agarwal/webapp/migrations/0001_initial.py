# Generated by Django 3.0.5 on 2020-04-21 18:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Partner',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('firstName', models.CharField(max_length=32)),
                ('lastName', models.CharField(max_length=32)),
                ('email', models.EmailField(max_length=254)),
                ('contact', models.CharField(max_length=10)),
                ('address', models.CharField(max_length=300)),
                ('city', models.CharField(max_length=32)),
                ('state', models.CharField(max_length=32)),
                ('typestore', models.CharField(max_length=32)),
                ('size', models.CharField(max_length=32)),
                ('workingemployees', models.PositiveIntegerField()),
                ('customers', models.PositiveIntegerField()),
                ('service', models.CharField(max_length=32)),
                ('password', models.CharField(max_length=32)),
                ('confirmPassword', models.CharField(max_length=32)),
            ],
        ),
    ]
