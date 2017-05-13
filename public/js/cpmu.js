let app = angular.module('myApp', []);

app.filter('myDateFormat', function myDateFormat($filter) {
    return function (text) {
        if (text === undefined){
            return 'Incorrect Format';
        } else {
            let tempdate = new Date(text);
            return $filter('date')(tempdate, "dd MMMM yyyy");
        }
    }
});

app.filter('cpmu', function cpmu() {
    return function (items) {
        return items.map(item => {
            if( item.hasOwnProperty('Complaints') && item.hasOwnProperty('UnitsSold')){
                if (item.Complaints === 0 || item.UnitsSold === 0){
                    item.cpmu = (0).toFixed(5);
                } else {
                    item.cpmu = ((item.Complaints / item.UnitsSold) * 1000000).toPrecision(10);
                }
            }
            return item;
        });
    }
});

app.controller('myCtrl', function ($scope) {
    $scope.quartToggle = function () {
        // switch between original and computated data
        $scope.showQuarterly = !$scope.showQuarterly;
        if ($scope.showQuarterly){
            $scope.items = $scope.quarterly;
        } else {
            $scope.items = $scope.original;
        }
    };

    $scope.modDate = () => {
        return $scope.tasks.filter(task => !task.completed);
    };

    $scope.init = function(data)
    {
        $scope.original = data;
        $scope.quarterly = [];
        $scope.items = data;

        let years = 0;
        let quarter = 1;
        let totalC = 0;
        let totalUS = 0;

        for(let i = 1; i < data.length; i++){

            totalC += data[i-1]['Complaints'];
            totalUS += data[i-1]['UnitsSold'];

            if (i % 3 === 0){
                console.log(i,totalC,totalUS );
                $scope.quarterly.push({"date": quarter, "cpmu" : ((totalC / totalUS) * 1000000).toPrecision(10)});
                totalC = 0;
                totalCP = 0;
                quarter++;
            }

            if( i % 12 === 0){
                years++;
                quarter = 1;
            }
        }
    };
});
