import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { WhiteSpace, SearchBar } from '@ant-design/react-native';

import Task from '../../components/Task';

import { getData } from '../../actions/data';

const tasks = [
    {
      description: 'Helps reduce greenhouse gas emissions when multiple people use a vehicle at the same time',
      category: 'Transportation',
      pointValue: 10,
      title: 'Take public transportation',
      id: '1IPMILhh54bWbZJQDIWb'
    },
    {
      pointValue: 20,
      title: 'Use own-grown vegetables for a meal',
      description: 'Using your own produce reduces pollution from the harmful pesticides used in commercially grown vegetables. This also reduces the amount of fossil fuels burned from driving to the supermarket and back.',
      category: 'Household',
      id: '1jlhTKgols3ghjH0fq3d'
    },
    {
      category: 'Technology',
      pointValue: 20,
      title: 'Read a book instead of using technology',
      description: 'Save electricity by putting down your technology and picking up a book',
      id: '2Gmvovvg7zWkr16rFIzu'
    },
    {
      description: 'Reduce air pollution by burning less car fuel ',
      category: 'Transportation',
      pointValue: 10,
      title: 'Ride your bike or skateboard',
      id: '2PdgTeE2KfVYu7SWSvfa'
    },
    {
      category: 'Technology',
      'description ': 'Reduce your electricity usage a little every night by turning off your computer before going to bed',
      pointValue: 10,
      title: 'Turn off computer overnight',
      id: '31LSdEOQGehOs7FA1OHP'
    },
    {
      category: 'Technology',
      'description ': 'If you’re not watching the TV, turn it off as soon as you’re finished to save electricity ',
      pointValue: 10,
      title: 'Turn off TV right away when finished',
      id: '40xLO6RUYc4tjVQrTHTv'
    },
    {
      pointValue: 10,
      title: 'Buy second hand',
      description: 'Help recycle clothes and keep them out of landfills by thrifting',
      category: 'Shopping',
      id: '4BRmAWWQRnMHgolN95oR'
    },
    {
      'description ': 'Shopping locally helps pollution since most of those farmers will grow their produce organically and without harmful pesticides',
      pointValue: 20,
      title: 'Shop at a farmer\\u2019s market',
      category: 'Shopping',
      id: '7ticWbF9VaEaaREsbAGt'
    },
    {
      category: 'Transportation',
      'description ': 'By activating cruise control, your vehicle will maintain a constant speed, helping in using less car fuel over a long amount of time',
      pointValue: 10,
      title: 'Use cruise control with driving',
      id: '819TgZvac1MQYmOfxNDL'
    },
    {
      category: 'Household',
      'description ': 'Showering for extensive periods of time wastes more water than you think. Shower in 5 minutes and save water!',
      pointValue: 10,
      title: 'Take a 5 minute shower',
      id: 'A8lQqOgRuk5b6f0b0Dc0'
    },
    {
      category: 'Household',
      'description ': 'By making sure to turn off all lights when you leave a room, you can save electricity ',
      pointValue: 10,
      title: 'Turn off all lights when not in use',
      id: 'AEeB3kt4mRVxGn9vvZMc'
    },
    {
      category: 'Gardening',
      'description ': 'Grow your garden and help release more oxygen into the air',
      pointValue: 40,
      title: 'Plant a seed',
      id: 'CqQJ32vRERBfl4F9SDZV'
    },
    {
      category: 'Personal',
      pointValue: 70,
      title: 'Donate clothes / items',
      description: 'Choose to recycle your clothes instead of throwing them away',
      id: 'Ev8ZYc8aAOpmANdgiL2c'
    },
    {
      category: 'Household',
      'description ': 'Leaving the water running isn’t needed when brushing your teeth',
      pointValue: 10,
      title: 'Turn off water when you brush teeth',
      id: 'HQetvx7gkQZIdnZIcysG'
    },
    {
      category: 'Household',
      'description ': 'Most water bottles end up in landfills instead of being recycled. Use a refillable one to keep water bottles out of landfills and use less plastic ',
      pointValue: 10,
      title: 'Use a refillable water bottle',
      id: 'LRysupmE2nlZiwN9lodg'
    },
    {
      category: 'Household',
      pointValue: 10,
      title: 'Recycle a can or bottle',
      description: 'Recycling saves energy because it takes less to create something out of recycled materials than producing it from scratch',
      id: 'OUbQfUcqG84oeK62UnjN'
    },
    {
      pointValue: 10,
      title: 'Water plants with recycled water',
      description: 'With this alternate water source, freshwater sources won’t be strained when watering plants',
      category: 'Gardening',
      id: 'Po3BKGVEwKnpsHH1CJgy'
    },
    {
      category: 'Household',
      pointValue: 20,
      title: 'Eat Vegetarian for the day',
      description: 'It takes thousands of gallons of water to produce one pound of meat. Save those gallons and go vegetarian every once in a while. ',
      id: 'QJ8tb5eYY1NtIx68nz93'
    },
    {
      category: 'Household',
      'description ': 'Save car fuel by choosing to eat at home over going out',
      pointValue: 20,
      title: 'Make a home-cooked meal',
      id: 'Sdwag9QQkxOIvhlP9ffu'
    },
    {
      'description ': 'Choose to buy products that use less unnecessary packaging to reduce trash in landfills',
      pointValue: 10,
      title: 'Buy an item with minimal packaging',
      category: 'Shopping',
      id: 'UMa8lTDVzIYnh59u5nKe'
    },
    {
      category: 'Personal',
      'description ': 'Support local organizations who help make our planet more green by simply just signing ',
      pointValue: 50,
      title: 'Sign a \\u201cgreen\\u201d petition',
      id: 'UNpkTORReOYnMF09VR4z'
    },
    {
      pointValue: 10,
      title: 'Pick up a piece of trash',
      description: 'Help clean your Earth and prevent clogs in water drains and pollution in oceans',
      category: 'Personal',
      id: 'WS2EXYFxsqHPSFhpjAQO'
    },
    {
      pointValue: 10,
      title: 'Don\\u2019t use a coffee stirrer',
      description: 'Why use a coffee stirrer when you can use your pointer finger? Use something reusable instead of a throwing away a stirrer after each use',
      category: 'Household',
      id: 'ZLk5xG6AysARLQN3Rk3X'
    },
    {
      description: "It's bad for your phone’s battery and wastes electricity  ",
      category: 'Technology',
      pointValue: 10,
      title: 'Unplug your phone when its at 100%',
      id: 'b9H15ZayHFVPUZ33CNqR'
    },
    {
      pointValue: 10,
      title: 'Go for a walk',
      description: 'Choose to go for a walk in your free time instead of using technology and doing activities that involve using electricity ',
      category: 'Transportation',
      id: 'cbmFdiLSFZM7YC0zkj5N'
    },
    {
      category: 'Household',
      pointValue: 10,
      title: 'Use fan instead of air conditioning',
      description: 'Unlike air conditioners, fans emit less harmful gases and save more electricity',
      id: 'ckUAfKjx6xn4VMsSGTGD'
    },
    {
      category: 'Gardening',
      pointValue: 20,
      title: 'Use leftover food as compost',
      description: 'Helps plant grow while recycling organic waste',
      id: 'dLfsMpiAnORNLW3U3oqx'
    },
    {
      category: 'Personal',
      pointValue: 80,
      title: 'Donate $ to an environmental organization',
      description: 'Give money to organizations you support and know will do good for our Earth',
      id: 'ehOH1WuoHyTEWMIlYTnx'
    },
    {
      pointValue: 70,
      title: 'Volunteer for a \\u201cGreen\\u201d Organization',
      description: 'Help organizations physically by volunteering and helping them towards their goals',
      category: 'Personal',
      id: 'l1aRKdn5cL6d1vkVOFtF'
    },
    {
      description: 'Everyone can contribute to less pollution by using one car instead of multiple when going to the same place',
      category: 'Transportation',
      pointValue: 10,
      title: 'Carpool',
      id: 'mU3m24JhXYBLnh2JFqMd'
    },
    {
      description: 'When going out, use the least amount of car fuel as possible by going to restaurants nearest to you',
      category: 'Shopping',
      pointValue: 20,
      title: 'Dine at a restaurant within 1 mile',
      id: 'nKbM6jZT2xO12gZgpUXZ'
    },
    {
      category: 'Shopping',
      pointValue: 10,
      title: 'Use a reusable bag for groceries',
      description: 'Protect wildlife and recycle by saying no to one-use plastic bags',
      id: 'rQEZXejbk0UCNMOZt3rS'
    },
    {
      category: 'Household',
      pointValue: 10,
      title: 'Use a reusable straw',
      description: '#savetheturtles and use reusable straws over plastic ones that disrupt wildlife and litter the oceans',
      id: 'toasZPnyrFtZWY7gTBya'
    },
    {
      category: 'Household',
      pointValue: 10,
      title: 'Clean with a cloth and not a paper towel',
      description: 'Reduce your paper trash by cleaning with cloths, which can be washed and used multiple times',
      id: 'xPIfLGzBIqeWJkP7Cm60'
    },
    {
      category: 'Shopping',
      pointValue: 10,
      title: 'Shop virtually',
      id: 'zRCICTjd3KDDWRDbBPqZ'
    }
  ];

const ChecklistPage = (props) => {
    // const [ways, setWays] = useState([]);

    // getData((data, error) => {
    //     if (error) {
    //         return;
    //     }

    //     setWays(data.ways);
    // });

    return (
        <SafeAreaView>
            <WhiteSpace size="lg" />
            <Text style={{ fontSize: 32, textAlign: 'center', fontFamily: 'Avenir-Light' }}>Checklist</Text>
            <WhiteSpace size="lg" />
            <SearchBar defaultValue="" placeholder="Search" cancelText="Cancel"/>
            <WhiteSpace size="lg" />
            <ScrollView style={{height: '100%'}}>
                {tasks.map((task) => {
                    return (
                        <>
                            <Task key={task.id} task={task} style={{marginHorizontal: 32}} />
                            <WhiteSpace size="lg" />
                        </>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

export default ChecklistPage;