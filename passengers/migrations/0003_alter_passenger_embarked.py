# Generated by Django 3.2 on 2021-05-04 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('passengers', '0002_alter_passenger_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='passenger',
            name='Embarked',
            field=models.CharField(max_length=20),
        ),
    ]
