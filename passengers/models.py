from django.db import models

class Passenger(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    passenger_class = models.CharField(max_length=10)


    def __str__(self):
        return f'{self.name}'

class QuizResult(models.Model):
    user = models.ForeignKey("auth.User", on_delete=models.CASCADE)
    score = models.IntegerField()
    class Meta:
        ordering = ['-score']



