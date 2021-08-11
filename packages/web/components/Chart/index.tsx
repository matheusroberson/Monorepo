import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ActiveDot from "../../../shared/components/Icons/ActiveDot";
import Star from "../../../shared/components/Icons/Star";
import Grow from "../../../shared/components/Icons/Grow";
import {
  AreaChart,
  XAxis,
  CartesianGrid,
  YAxis,
  Area,
  Tooltip as Tool,
} from "recharts";
import ReactTooltip from "react-tooltip";

const data = [
  { hour: "10:00", pv: 0 },
  { hour: "10:30", pv: 600 },
  { hour: "11:00", pv: 900 },
  { hour: "12:00", pv: 750 },
  { hour: "13:00", pv: 900 },
  { hour: "14:00", pv: 150 },
  { hour: "15:00", pv: 300 },
  { hour: "16:00", pv: 200 },
  { hour: "17:00", pv: 180 },
  { hour: "17:30", pv: 200 },
  { hour: "18:00", pv: 300 },
];

interface chartProps {
  infos: {
    symbol: string;
    companyName: string;
    change: number;
    latestPrice: number;
  };
}

const Chart = (props: chartProps) => {
  const perChange =
    ((props.infos.latestPrice -
      (props.infos.latestPrice - props.infos.change)) /
      props.infos.latestPrice) *
    100;

  const CustomActiveDot = ({ cx, cy }: { cx: number; cy: number }) => {
    return (
      <ActiveDot
        strokeWidth={2}
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
      />
    );
  };

  const CustomToolTip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <View style={styles.containerTooltip}>
          <View style={styles.tooltip}>
            <Text style={styles.tooltipValue}>${payload[0].value}</Text>
          </View>
          <Text style={styles.tooltipArrow}></Text>
        </View>
      );
    }
    return null;
  };

  return (
    <>
      <View style={styles.containerChart}>
        <View style={styles.headerChart}>
          <View style={styles.containerHeader}>
            <TouchableOpacity>
              <ReactTooltip backgroundColor="#0047BB" borderColor="#0047BB" />
              <Star
                width={23}
                height={23}
                fill={"#FFF"}
                stroke={"#0047BB"}
                strokeWidth={1.5}
                data-tip="Adicionar aos Favoritos"
              />
            </TouchableOpacity>
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.symbol}>{props.infos.symbol}</Text>
              <Text style={styles.companyName}>{props.infos.companyName}</Text>
            </View>
          </View>
          <View style={styles.containerChange}>
            <View style={styles.containerGrow}>
              {perChange > 0 ? (
                <Grow
                  width={20}
                  height={20}
                  stroke={"#79C300"}
                  transform={"translate(-4 0)"}
                />
              ) : (
                <Grow
                  transform={"rotate(180) scale(-1, 1) translate(-4 1)"}
                  width={20}
                  height={20}
                  stroke={"#D64B45"}
                />
              )}
              <Text style={styles.latestPrice}>${props.infos.latestPrice}</Text>
            </View>
            {perChange > 0 ? (
              <Text style={[styles.change, styles.changePositive]}>
                ${props.infos.change} (${perChange.toFixed(2)}%)
              </Text>
            ) : (
              <Text style={[styles.change, styles.changeNegative]}>
                ${props.infos.change} (${perChange.toFixed(2)}%)
              </Text>
            )}
          </View>
        </View>
        <View>
          <AreaChart
            width={748}
            height={380}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="45%" stopColor="#0047BB75" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#0047BB75" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fontFamily: "Graphik",
                fontSize: 12,
              }}
              dataKey="hour"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{
                fontFamily: "Graphik",
                fontSize: 11,
                fill: "#657786",
              }}
            />
            <CartesianGrid stroke="#F5F8FA" />
            <Tool content={<CustomToolTip />} />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#0047BB"
              fillOpacity={1}
              strokeWidth={2}
              fill="url(#colorPv)"
              dot={{
                stroke: "#0047BB",
                fill: "#0047BB",
                strokeWidth: 1,
              }}
              activeDot={CustomActiveDot}
            />
          </AreaChart>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerChart: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginTop: 24,
  },
  headerChart: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  containerChange: {
    alignItems: "flex-end",
  },
  containerTooltip: {
    borderRadius: 4,
    alignItems: "center",
    height: 50,
  },
  tooltip: {
    backgroundColor: "#0047BB",
    width: 76.01,
    height: 28.23,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  tooltipValue: {
    color: "#FFF",
    fontFamily: "Graphik",
    fontSize: 14,
    lineHeight: 20,
  },
  tooltipArrow: {
    backgroundColor: "#transparent",
    borderRadius: 1,
    width: 12,
    height: 6,
    marginRight: 10,
    borderTopColor: "#0047BB",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopWidth: 8,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderStyle: "solid",
  },
  symbol: {
    fontFamily: "Graphik",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.005,
    color: "#14171A",
  },
  companyName: {
    fontFamily: "Graphik",
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 19.6,
    color: "#14171A",
  },
  latestPrice: {
    fontFamily: "Graphik",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.0075,
    color: "#14171A",
  },
  change: {
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 16,
  },
  changePositive: {
    color: "#79C300",
  },
  changeNegative: {
    color: "#D64B45",
  },
  containerGrow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default Chart;
