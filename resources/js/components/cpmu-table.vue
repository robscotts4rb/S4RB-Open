<template>
    <div>
        <slot>
            Your table
        </slot>
        <div class="tbl-options">
            <div class="btn-group pull-left">
                <button class="btn" @click="toggleQuarterly()">Show {{ buttonText }}</button>
                <br>
                <br>
            </div>
        </div>
        <transition name="fade" appear mode="out-in">
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>{{ headerOne }}</th>
                        <th>{{ headerTwo }}</th>
                    </tr>
                    </thead>
                    <transition-group name="list" tag="tbody" mode="out-in">
                        <tr v-for="item in pagResults" :key="item">
                            <td style="width:50%;">{{ item.date}}</td>
                            <td style="width:50%;">{{ item.cpmu}}</td>
                        </tr>
                    </transition-group>
                </table>
                <div class="pull-left">
                    <p v-if="sortedData.length > this.rowsPerPage">Showing <span class="bold">{{ ((this.rowsPerPage * (this.currentPage)) +
                        this.pagResults.length) }}</span> of <span class="bold">{{ sortedData.length}}</span></p>
                </div>
                <div class="btn-group pull-right">
                    <button v-if="currentPage != 0"
                            @click="currentPage--" :class="[nextPage ? 'show-prev' :'hide-prev', 'btn']">
                        Prev
                    </button>
                    <button v-if="sortedData.length > this.rowsPerPage && (currentPage + 1) < maxPage"
                            @click="(currentPage + 1) < maxPage ? currentPage++ : ''" class="btn">Next
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<style>

    .fade-enter-active, .fade-leave-active {
        transition: opacity .8s
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
    {
        opacity: 0
    }

    .list-item {
        display: inline-block;
        margin-right: 10px;
    }

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }

    .list-enter, .list-leave-to /* .list-leave-active for <2.1.8 */
    {
        opacity: 0;
        transform: translateY(30px);
    }
</style>

<script>
    export default {

        props: {
            'items': {
                required: true
            },
            'rowsPerPage': {
                required: true
            },
        },
        data: function () {
            return {
                temp: [],
                sortedData: [],
                monthly: [],
                quarterly: [],
                showQuarterly: false,
                headerOne: 'Monthly',
                headerTwo: 'CPMU',
                buttonText: 'Quarterly',
                currentPage: 0,
            }
        },
        computed: {
            pagResults() {
                if (this.sortedData.length > 0) {
                    return this.sortedData.slice((this.rowsPerPage * this.currentPage), this.rowsPerPage * (this.currentPage + 1));
                }
            },
            nextPage(){
                return this.currentPage >= 1;
            },
            maxPage(){
                return (this.sortedData.length / this.rowsPerPage)
            }
        },
        watch: {},
        methods: {
            doQuarterly(){
                if (this.monthly !== undefined) {
                    let years = 0;
                    let quarter = 1;
                    let totalC = 0;
                    let totalUS = 0;

                    for (let i = 1; i < this.monthly.length; i++) {

                        totalC += this.monthly[i - 1]['Complaints'];
                        totalUS += this.monthly[i - 1]['UnitsSold'];

                        if (i % 3 === 0) {
                            this.quarterly.push({
                                "date": quarter,
                                "cpmu": ((totalC / totalUS) * 1000000).toPrecision(10)
                            });
                            totalC = 0;
                            totalUS = 0;
                            quarter++;
                        }

                        if (i % 12 === 0) {
                            years++;
                            quarter = 1;
                        }
                    }
                }
            },
            toggleQuarterly() {
                this.showQuarterly = this.showQuarterly === false;

                this.currentPage = 0;

                if (this.showQuarterly === true) {
                    this.sortedData = this.quarterly;
                    this.headerOne = 'Quarter';
                    this.buttonText = 'Monthly'

                } else {
                    this.sortedData = this.monthly;
                    this.headerOne = 'Monthly';
                    this.buttonText = 'Quarterly'
                }
            },
            datesAndCalculate(){
                this.monthly = this.temp.map(item => {
                    if (item.hasOwnProperty('Complaints') && item.hasOwnProperty('UnitsSold')) {
                        if (item.Complaints === 0 || item.UnitsSold === 0) {
                            item.cpmu = (0).toFixed(5);
                        } else {
                            item.cpmu = ((item.Complaints / item.UnitsSold) * 1000000).toPrecision(10);
                        }
                    }

                    if (item.hasOwnProperty('Value.date')) {
                        item.date = moment(new Date(item['Value.date'])).format('DD MMMM YYYY');
                    }

                    return item;
                });

                this.sortedData = this.monthly;
            }
        },
        mounted() {
            this.temp = JSON.parse(this.items);

            if (this.temp !== undefined) {
                this.datesAndCalculate();
                this.doQuarterly();
            }
        }
    }
</script>