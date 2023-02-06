import { Text, View, ScrollView } from "react-native";
import { DAY_SIZE, HabitDay } from "../components/HabitDay";
import { Header } from "../components/Header";
import { generateDateFromYearBeginning } from "../utils/generate-date-from-year-beginning";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const datesFromYearStart = generateDateFromYearBeginning()
const minimumSummaryDateSizes = 18 * 5;
const amountOfDaysToFill = minimumSummaryDateSizes - datesFromYearStart.length;

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 py-16">
      <Header />
      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, index) => (
          <Text 
            key={`${weekDay}-${index}`}
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            style={{ width: DAY_SIZE }}
          >
            {weekDay}
          </Text>
        ))}
      </View>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {
            datesFromYearStart.map(date => (
              <HabitDay 
                key={date.toDateString()}
              />
            ))
          }

          {
            amountOfDaysToFill > 0 && Array
            .from({ length: amountOfDaysToFill })
            .map((_, index) => (
              <View 
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40 hover:cursor-not-allowed"
                style={{ width: DAY_SIZE, height: DAY_SIZE }}
                key={index}
              />
            ))
          }
        </View>
      </ScrollView>

    </View>    
  )
}
