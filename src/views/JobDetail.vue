<template>
    <Header :header-theme="'white'"></Header>
    <div class="job-detail">
        <div class="job-detail-content">
            <div class="job-detail-content-top">
                <img :src="showIcon(detailData.pic)" class="icon-job">
                <div class="job-detail-content-top-right">
                    <select-job :title="detailData.title" @change="change"></select-job>
                    <div class="desc">{{ detailData.description }}</div>
                </div>
            </div>
            <div class="job-detail-content-container">
                <div class="title-container">
                    <div class="title">{{ detailData.title }}平均薪资</div>
                    <div class="sub-title">来源于1643091份样本，结果仅供参考。2023年12月21日更新</div>
                </div>
                <div class="salary">
                    <span>
                        月收入平均值：
                        <span class="price">¥{{ detailData.averageSalary }}</span>
                    </span>
                    <span>
                        月收入中位数：
                        <span class="price">¥{{ detailData.median }}</span>
                    </span>
                </div>
                <div class="statistics">
                    <div id="salary-bar"></div>
                    <div id="salary-pie"></div>
                </div>
                <div class="work-content">
                    <div class="title">工作内容</div>
                    <ol>
                        <li v-for="v in detailData.jobContent" :key="v">{{ v }}</li>
                    </ol>
                    <div class="title">岗位技能</div>
                    <ol>
                        <li v-for="v in detailData.jobSkills" :key="v">{{ v }}</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SelectJob from "@/components/SelectJob.vue";
import { showIcon } from "@/utils/tools";
import { ref, inject, onMounted } from "vue";
import * as echarts from 'echarts';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();
const detailData = ref({});
const axios = inject("$axios");

const change = async (data) => {
    await router.push({
        name: 'job-detail',
        query: {
            type: data.type,
            id: data.id
        }
    });
    await fetchJobData();
}
const fetchJobData = () => {
    axios.get('/api/jobs', {
        params: {
            category: route.query.type
        }
    }).then(res => {
        const tmp = res.data[0].jobs.filter(item => item.id == parseInt(route.query.id));
        detailData.value = tmp[0];
        salaryBar();
        salaryPie();
    })
}
const salaryBar = () => {
    var proportion = detailData.value.proportion;
    var chartADom = document.getElementById('salary-bar');
    var myChartA = echarts.init(chartADom);
    var optionA;

    optionA = {
        title: {
            text: '薪资分布',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function (params) {
                var tar = params[0];
                return '薪资范围：' + tar.name + '<br><span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#5b8ff9;"></span>' + tar.seriesName + '：' + tar.value + ' %';
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['￥2k-7k', '￥7k-12k', '￥12k-17k', '￥17k-22k', '￥22k-30k', '￥30k-38k', '￥38k以上'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                data: [0, 5, 10, 15, 20, 25],
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                color: '#5b8ff9',
                name: '占比',
                type: 'bar',
                barWidth: '40%',
                data: proportion
            }
        ]
    };
    optionA && myChartA.setOption(optionA);
}
const salaryPie = () => {
    const avgMonthSalary = detailData.value.avgMonthSalary;
    var chartBDom = document.getElementById('salary-pie');
    var myChartB = echarts.init(chartBDom);
    var optionB;

    optionB = {
        title: {
            text: '工资年限薪资分布',
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return '工作年限：' + params.name + '<br><span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + params.color + '"></span>' + params.seriesName + '：￥' + params.value;
            }
        },
        legend: {
            orient: 'vertical',
            x: '50%',
            y: 'center',
            formatter: function (name) {
                var data = optionB.series[0].data;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].name == name) {
                        var percent = Math.round(data[i].value / data.reduce(function (sum, item) {
                            return sum + item.value;
                        }, 0) * 100);
                        return name + ' (' + percent + '%)：￥' + data[i].value;
                    }
                }
            }
        },
        series: [
            {
                name: '平均月薪',
                type: 'pie',
                center: ['15%', '50%'],
                radius: ['45%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',
                },
                labelLine: {
                    show: false
                },
                emphasis: {
                    label: {
                        show: false,
                        fontSize: '40',
                        fontWeight: 'bold',
                    },
                },
                data: [
                    { value: avgMonthSalary[0], name: '1-2年' },
                    { value: avgMonthSalary[1], name: '3-5年' },
                    { value: avgMonthSalary[2], name: '6-8年' },
                    { value: avgMonthSalary[3], name: '5-10年' }
                ]
            }
        ]
    };

    optionB && myChartB.setOption(optionB);
}
onMounted(() => {
    fetchJobData()
})
</script>

<style scoped>
.statistics {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
}

#salary-bar {
    width: 650px;
    height: 179px;
}

#salary-pie {
    flex: 1;
}

.job-detail {
    background: url(../assets/img/job-detail-bg.png);
    background-color: #f4f7fa;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%
}

.job-detail .job-detail-content {
    margin: 0 auto;
    overflow: hidden;
    width: 1200px
}

.job-detail .job-detail-content-top {
    display: flex;
    flex-wrap: nowrap;
    border-radius: 8px;
    box-shadow: 0 2px 10px 0 rgba(229, 235, 241, .5);
    padding: 24px;
    margin-bottom: 20px;
    margin-top: 20px;
    background-color: #fff;
}

.job-detail .job-detail-content-top .icon-job {
    width: 70px;
    height: 70px;
    border-radius: 8px;
    margin-right: 20px;
}

.job-detail .job-detail-content-top-right {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between
}

.job-detail .job-detail-content-top-right .title {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px
}

.job-detail .job-detail-content-top-right .desc {
    font-size: 16px;
    line-height: 22px;
}



.job-detail-content-container {
    border-radius: 8px;
    box-shadow: 0 2px 10px 0 rgba(229, 235, 241, .5);
    background-color: #fff;
    padding: 24px;
}

.job-detail-content-container .title-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.job-detail-content-container .title {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px
}

.job-detail-content-container .title-container .sub-title {
    color: #999;
    font-size: 14px;
    line-height: 20px
}

.job-detail-content-container .salary {
    background: linear-gradient(90deg, #f1f7ff, #eff3fe);
    margin: 16px 0 24px;
    padding: 14px 16px;
}

.job-detail-content-container .salary .price {
    color: #ef4c3c;
    margin-right: 80px
}

.job-detail-content-container .work-content {
    margin-top: 40px;
}

.job-detail-content-container .work-content ol {
    list-style: decimal;
    color: #24292e;
    font-size: 16px;
}

.job-detail-content-container .work-content ol li {
    counter-increment: li;
    counter-reset: li;
    list-style-type: decimal;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
}
</style>