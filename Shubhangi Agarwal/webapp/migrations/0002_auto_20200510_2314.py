# Generated by Django 3.0.5 on 2020-05-10 17:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='store',
            old_name='customer',
            new_name='owner',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='confirmPassword',
        ),
    ]
