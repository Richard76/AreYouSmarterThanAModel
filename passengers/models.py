from django.db import models

class Passenger(models.Model):
    # id = models.IntegerField(primary_key=True)
    Survived = models.CharField(max_length=10)
    Passenger_Class = models.CharField(max_length=10, default="Third")
    Sex = models.CharField(max_length=10)
    Age = models.IntegerField()
    Fare_Paid = models.IntegerField(default=0)
    Embarked = models.CharField(max_length=20)
    Size_of_Group = models.IntegerField()
    Cabin_Class = models.CharField(max_length=1, default=0)
    Title = models.CharField(max_length=12)


    def __str__(self):
        return f'{self.PassengerId}'

class QuizResult(models.Model):
    user = models.ForeignKey("auth.User", on_delete=models.CASCADE)
    score = models.IntegerField()
    class Meta:
        ordering = ['-score']



