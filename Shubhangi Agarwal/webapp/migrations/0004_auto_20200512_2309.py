# Generated by Django 3.0.5 on 2020-05-12 17:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0003_auto_20200510_2318'),
    ]

    operations = [
        migrations.RenameField(
            model_name='store',
            old_name='customersPerDay',
            new_name='customers',
        ),
        migrations.RenameField(
            model_name='store',
            old_name='owner',
            new_name='ownerId',
        ),
        migrations.RenameField(
            model_name='store',
            old_name='storeType',
            new_name='typeStore',
        ),
    ]
