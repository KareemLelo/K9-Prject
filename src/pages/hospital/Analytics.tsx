import React from "react";
import {
  Card,
  Title,
  Text,
  Flex,
  Grid,
  Metric,
  BadgeDelta,
} from "@tremor/react";
import { Search, Users } from "lucide-react";
import { BarChart, TooltipCallbackProps } from "../../components/BarChart";

const salesData = [
  { date: "Jan 24", Sales: 85400 },
  { date: "Feb 24", Sales: 92000 },
  { date: "Mar 24", Sales: 88000 },
  { date: "Apr 24", Sales: 85000 },
  { date: "May 24", Sales: 89000 },
  { date: "Jun 24", Sales: 92405 },
];

const casesData = [
  { date: "2024-01", Cases: 300 },
  { date: "2024-02", Cases: 320 },
  { date: "2024-03", Cases: 280 },
  { date: "2024-04", Cases: 300 },
  { date: "2024-05", Cases: 320 },
  { date: "2024-06", Cases: 340 },
];

const vetsData = [
  { date: "2024-01", Vets: 45 },
  { date: "2024-02", Vets: 48 },
  { date: "2024-03", Vets: 42 },
  { date: "2024-04", Vets: 45 },
  { date: "2024-05", Vets: 50 },
  { date: "2024-06", Vets: 55 },
];

const topVets = [
  {
    name: "Ahmad",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop",
    cases: 23,
    commission: 650,
  },
  {
    name: "Sarah",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop",
    cases: 20,
    commission: 550,
  },
  {
    name: "Sawsan",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop",
    cases: 15,
    commission: 456,
  },
];

const commissionData = [
  { date: "2024-01", Commission: 3800 },
  { date: "2024-02", Commission: 4200 },
  { date: "2024-03", Commission: 3900 },
  { date: "2024-04", Commission: 4100 },
  { date: "2024-05", Commission: 4300 },
  { date: "2024-06", Commission: 4500 },
];

const newVetsData = [
  { date: "2024-01", "New Vets": 2 },
  { date: "2024-02", "New Vets": 3 },
  { date: "2024-03", "New Vets": 1 },
  { date: "2024-04", "New Vets": 2 },
  { date: "2024-05", "New Vets": 2 },
  { date: "2024-06", "New Vets": 3 },
];

const newPetsData = [
  { date: "2024-01", "New Pets": 18 },
  { date: "2024-02", "New Pets": 20 },
  { date: "2024-03", "New Pets": 15 },
  { date: "2024-04", "New Pets": 19 },
  { date: "2024-05", "New Pets": 21 },
  { date: "2024-06", "New Pets": 23 },
];

export const Analytics: React.FC = () => {
  const [salesTooltip, setSalesTooltip] =
    React.useState<TooltipCallbackProps | null>(null);
  const [casesTooltip, setCasesTooltip] =
    React.useState<TooltipCallbackProps | null>(null);
  const [vetsTooltip, setVetsTooltip] =
    React.useState<TooltipCallbackProps | null>(null);
  const [commissionTooltip, setCommissionTooltip] =
    React.useState<TooltipCallbackProps | null>(null);
  const [newVetsTooltip, setNewVetsTooltip] =
    React.useState<TooltipCallbackProps | null>(null);
  const [newPetsTooltip, setNewPetsTooltip] =
    React.useState<TooltipCallbackProps | null>(null);

  const dollarFormatter = (value: number) =>
    `$${Intl.NumberFormat("us").format(value).toString()}`;
  const numberFormatter = (value: number) =>
    Intl.NumberFormat("us").format(value).toString();

  const chartColors = {
    sales: "rgb(188, 141, 141)",
    cases: "rgb(146, 106, 106)",
    vets: "rgb(164, 152, 133)",
  };

  const tooltipCallback = (
    setter: React.Dispatch<React.SetStateAction<TooltipCallbackProps | null>>
  ) => {
    return (props: TooltipCallbackProps) => {
      if (props.active) {
        setter((prev: TooltipCallbackProps | null) => {
          if (prev?.label === props.label) return prev;
          return props;
        });
      }
      return null;
    };
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Overview</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Oct 25 - Oct 30"
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent bg-white"
            />
          </div>
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        <Card className="bg-white rounded-xl shadow-sm p-6 min-w-[280px] w-full">
          <Flex alignItems="start">
            <div className="space-y-1">
              <Text className="text-gray-600 text-sm">Sales</Text>
              <Metric className="text-2xl font-semibold">
                {salesTooltip?.payload?.[0]?.value
                  ? dollarFormatter(salesTooltip.payload[0].value)
                  : dollarFormatter(salesData[salesData.length - 1].Sales)}
              </Metric>
            </div>
            <BadgeDelta
              deltaType="increase"
              className="bg-green-50 text-green-700"
            >
              5.39%
            </BadgeDelta>
          </Flex>
          <BarChart
            data={salesData}
            index="date"
            categories={["Sales"]}
            showLegend={false}
            showYAxis={false}
            startEndOnly={true}
            className="-mb-2 mt-4 h-28"
            tooltipCallback={tooltipCallback(setSalesTooltip)}
          />
        </Card>

        <Card className="bg-white rounded-xl shadow-sm p-6 min-w-[280px] w-full">
          <Flex alignItems="start">
            <div className="space-y-1">
              <Text className="text-gray-600 text-sm">Cases</Text>
              <Metric className="text-2xl font-semibold">
                {casesTooltip?.payload?.[0]?.value
                  ? numberFormatter(casesTooltip.payload[0].value)
                  : numberFormatter(casesData[casesData.length - 1].Cases)}
              </Metric>
            </div>
            <BadgeDelta
              deltaType="increase"
              className="bg-green-50 text-green-700"
            >
              5.39%
            </BadgeDelta>
          </Flex>
          <BarChart
            data={casesData}
            index="date"
            categories={["Cases"]}
            showLegend={false}
            showYAxis={false}
            startEndOnly={true}
            className="-mb-2 mt-4 h-28"
            tooltipCallback={tooltipCallback(setCasesTooltip)}
          />
        </Card>

        <Card className="bg-white rounded-xl shadow-sm p-6 min-w-[280px] w-full">
          <Flex alignItems="start">
            <div className="space-y-1">
              <Text className="text-gray-600 text-sm">Vets</Text>
              <Metric className="text-2xl font-semibold">
                {vetsTooltip?.payload?.[0]?.value
                  ? numberFormatter(vetsTooltip.payload[0].value)
                  : numberFormatter(vetsData[vetsData.length - 1].Vets)}
              </Metric>
            </div>
            <BadgeDelta
              deltaType="increase"
              className="bg-green-50 text-green-700"
            >
              6.84%
            </BadgeDelta>
          </Flex>
          <BarChart
            data={vetsData}
            index="date"
            categories={["Vets"]}
            showLegend={false}
            showYAxis={false}
            startEndOnly={true}
            className="-mb-2 mt-4 h-28"
            tooltipCallback={tooltipCallback(setVetsTooltip)}
          />
        </Card>
      </div>

      <Card className="bg-white rounded-lg">
        <Title>Top Vets</Title>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {topVets.map((vet, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <img
                src={vet.image}
                alt={vet.name}
                className="w-20 h-20 rounded-full mb-2"
              />
              <Text className="font-medium text-blue-600">{vet.name}</Text>
              <Text className="text-sm text-gray-600">{vet.cases} cases</Text>
              <Text className="text-sm text-gray-600">
                {vet.commission} JOD
              </Text>
            </div>
          ))}
        </div>
      </Card>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Users className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Overview</h2>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">Export</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        <Card className="bg-white rounded-xl shadow-sm p-6 min-w-[280px] w-full">
          <Flex alignItems="start">
            <div className="space-y-1">
              <Text className="text-gray-600 text-sm">Commission</Text>
              <Metric className="text-2xl font-semibold">
                {commissionTooltip?.payload?.[0]?.value
                  ? dollarFormatter(commissionTooltip.payload[0].value)
                  : dollarFormatter(
                      commissionData[commissionData.length - 1].Commission
                    )}
              </Metric>
            </div>
            <BadgeDelta
              deltaType="increase"
              className="bg-green-50 text-green-700"
            >
              5.39%
            </BadgeDelta>
          </Flex>
          <BarChart
            data={commissionData}
            index="date"
            categories={["Commission"]}
            showLegend={false}
            showYAxis={false}
            startEndOnly={true}
            className="-mb-2 mt-4 h-28"
            tooltipCallback={tooltipCallback(setCommissionTooltip)}
          />
        </Card>

        <Card className="bg-white rounded-xl shadow-sm p-6 min-w-[280px] w-full">
          <Flex alignItems="start">
            <div className="space-y-1">
              <Text className="text-gray-600 text-sm">New Vets</Text>
              <Metric className="text-2xl font-semibold">
                {newVetsTooltip?.payload?.[0]?.value
                  ? numberFormatter(newVetsTooltip.payload[0].value)
                  : numberFormatter(
                      newVetsData[newVetsData.length - 1]["New Vets"]
                    )}
              </Metric>
            </div>
            <BadgeDelta
              deltaType="increase"
              className="bg-green-50 text-green-700"
            >
              5.39%
            </BadgeDelta>
          </Flex>
          <BarChart
            data={newVetsData}
            index="date"
            categories={["New Vets"]}
            showLegend={false}
            showYAxis={false}
            startEndOnly={true}
            className="-mb-2 mt-4 h-28"
            tooltipCallback={tooltipCallback(setNewVetsTooltip)}
          />
        </Card>

        <Card className="bg-white rounded-xl shadow-sm p-6 min-w-[280px] w-full">
          <Flex alignItems="start">
            <div className="space-y-1">
              <Text className="text-gray-600 text-sm">New Pets</Text>
              <Metric className="text-2xl font-semibold">
                {newPetsTooltip?.payload?.[0]?.value
                  ? numberFormatter(newPetsTooltip.payload[0].value)
                  : numberFormatter(
                      newPetsData[newPetsData.length - 1]["New Pets"]
                    )}
              </Metric>
            </div>
            <BadgeDelta
              deltaType="increase"
              className="bg-green-50 text-green-700"
            >
              6.84%
            </BadgeDelta>
          </Flex>
          <BarChart
            data={newPetsData}
            index="date"
            categories={["New Pets"]}
            showLegend={false}
            showYAxis={false}
            startEndOnly={true}
            className="-mb-2 mt-4 h-28"
            tooltipCallback={tooltipCallback(setNewPetsTooltip)}
          />
        </Card>
      </div>
    </div>
  );
};
