# Generated by Django 3.0.6 on 2020-06-02 15:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('email', models.CharField(max_length=64, primary_key=True, serialize=False)),
                ('firstName', models.CharField(blank=True, max_length=32)),
                ('lastName', models.CharField(blank=True, max_length=32)),
                ('password', models.CharField(max_length=32)),
                ('contact', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Store',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('storeName', models.CharField(max_length=32)),
                ('address', models.CharField(max_length=512)),
                ('city', models.CharField(max_length=32)),
                ('state', models.CharField(max_length=32)),
                ('pincode', models.CharField(max_length=6)),
                ('typeStore', models.CharField(max_length=32)),
                ('size', models.CharField(max_length=32)),
                ('workingEmployees', models.PositiveIntegerField()),
                ('customer', models.PositiveIntegerField()),
                ('ownedRented', models.CharField(max_length=32)),
                ('program', models.CharField(max_length=32)),
                ('feedback', models.CharField(blank=True, default='', max_length=256)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='webapp.Customer')),
            ],
        ),
    ]
