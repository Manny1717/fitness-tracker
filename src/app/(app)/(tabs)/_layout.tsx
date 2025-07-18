import React from 'react'
import {Tabs} from "expo-router";
import {AntDesign} from "@expo/vector-icons";

const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{headerShown: false, title: "Index",
            tabBarIcon: ({color, size}) => (
                <AntDesign name="home" size={size} color={color}/>
                    ),
                }}
            />
            <Tabs.Screen name="exercises" options={{headerShown: false, title: "Exercises",
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="book" size={size} color={color}/>
                ),
            }}
            />
            <Tabs.Screen name="workout" options={{headerShown: false, title: "Workout",
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="pluscircle" size={size} color={color}/>
                ),
            }}
            />
            <Tabs.Screen name="active-workout"
                options={{
                    headerShown: false,
                    title: "Active Workout",
                    href: null,
                    tabBarStyle: {
                        display: "none"
                    },
                }}
            />
            <Tabs.Screen name="history" options={{headerShown: false, title: "History",
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="clockcircleo" size={size} color={color}/>
                ),
            }}
            />
            <Tabs.Screen name="profile" options={{headerShown: false, title: "Profile",
               // tabBarIcon: ({color, size}) => (
                   // <Image
                      //  source={user?.imageUrl ?? user?.externalAccounts[0]?.imageUrl}
                        //className="rounded-full"
                        //style={{width: 28, height: 28, borderRadius: 100}}
                    ///>
               // ),
            }}
            />
        </Tabs>
    )
}
export default Layout
