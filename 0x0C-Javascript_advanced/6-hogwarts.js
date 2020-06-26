function studentHogwarts()
{
    // private variables
    let privateScore = 0;
    let name = null;

    // private method
    function changeScoreBy(points)
    {
        privateScore += points;
    }

    // public variables and methods
    return {
        setName(newName)
        {
            name = newName;
        },
        rewardStudent()
        {
            changeScoreBy(1);
        },
        penalizeStudent()
        {
            changeScoreBy(-1);
        },
        getScore()
        {
            return name + ': ' + privateScore;
        }
    }
}

let harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
