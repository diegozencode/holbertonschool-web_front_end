function createClassRoom(numberOfStudents)
{
    function studentSeat(seat)
    {
        return function()
        {
            return seat;
        }
    }
    let students = [];
    for (let i = 0; i < numberOfStudents; i++) {
        students.fill(studentSeat(i + 1));
        // number of iteration + 1 -> studentSeat -> add return value to students array 
    }
    return students;
}
let classRoom = createClassRoom(10);
