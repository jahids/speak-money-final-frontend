/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { DecompositionTreeGraph } from '@ant-design/graphs';
import axios from 'axios';
function PredectionChart() {
const storageData : any  = JSON.parse(localStorage.getItem('user'));
const [chartdata, setchartdata] = useState<any>(null)
const [loading, setLoading] = useState<boolean>(true); // Initial loading state

useEffect(() => {
    axios
      .get(`http://localhost:7000/suggestions/${storageData?._id}`)
      .then((response) => {
        console.log('data', response.data);
        setchartdata(response.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.log('error', error);
        setLoading(false); // Set loading to false on error
      });
  }, [storageData?._id]);
    const data = {
        
        id: 'A0',
        value: {
          title: 'blance',
          items: [
            {
              text: Math.round(chartdata?.totalBalance),
            },
          ],
        },
        children: [
          {
            id: 'A1',
            value: {
              title: 'income',
              items: [
                {
                  text: Math.round(chartdata?.totalIncome),
                },
                
              ],
            },
            children: [
              {
                id: 'A11',
                value: {
                  title: 'yearly',
                  items: [
                    {
                      text: Math.round(chartdata?.yearlyIncome),
                    }
                    
                  ],
                },
              },
              {
                id: 'A12',
                value: {
                  title: 'monthly',
                  items: [
                    {
                      text: Math.round(chartdata?.monthlyIncome),
                    }
                  ],
                },
              },
              {
                id: 'A13',
                value: {
                  title: 'daily',
                  items: [
                    {
                      text: Math.round(chartdata?.dailyIncome),
                    }
                  ],
                },
              },
            ],
          },
          
          {
            id: 'A2',
            value: {
              title: 'Savings',
              items: [
                {
                  text: Math.round(chartdata?.totalSavings),
                },
                
              ],
            },
            children:[{
                id: 'A20',
                value: {
                  title: 'yearly',
                  items: [
                    {
                      text: Math.round(chartdata?.yearlySavings),
                    }
                  ],
                },
              },{
                id: 'A19',
                value: {
                  title: 'daily',
                  items: [
                    {
                      text: Math.round(chartdata?.dailySavings),
                    }
                  ],
                },
              },
              {
                id: 'A71',
                value: {
                  title: 'Monthly',
                  items: [
                    {
                      text: Math.round(chartdata?.monthlySavings)
                    }
                  ],
                },
              }
            ]
          },


          {
            id: 'A3',
            value: {
              title: 'Expense',
              items: [
                {
                    text: Math.round(chartdata?.totalExpense)
                }
              ],
            },
            children:[
                
                {
                id: 'A144',
                value: {
                  title: 'yearly',
                  items: [
                    {
                        text: Math.round(chartdata?.yearlyExpense)
                    }
                  ],
                },


              },
            
              {
                id: 'A145',
                value: {
                  title: 'Monthly',
                  items: [
                    {
                        text: Math.round(chartdata?.monthlyExpense)
                    }
                  ],
                },


              },

              {
                id: 'A146',
                value: {
                  title: 'daily',
                  items: [
                    {
                        text: Math.round(chartdata?.dailyExpense)
                    }
                  ],
                },


              },
            
            ]
          },
          
        ],
      };
    
      const config = {
        data,
        markerCfg: (cfg : any) => {
          const { children } = cfg;
          return {
            show: children?.length,
          };
        },
        behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
      };

  return (
    <div className="bg-transparent">
    <div className="text-center p-4">
      <h1 className="text-2xl font-semibold">Track Your Income, Expenses, and Savings</h1>
      <p className="text-gray-600 mt-2">
        This page displays your daily, monthly, and yearly income, expenses, and savings in graphical form.
      </p>
    </div>

    {loading ? (
      // Show a loader while data is being fetched
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-b-4 border-gray-500 border-opacity-25 h-16 w-16"></div>
      </div>
    ) : (
      <DecompositionTreeGraph
        style={{ backgroundColor: 'transparent', width: 'auto', height: '100vh' }}
        {...config}
      />
    )}
  </div>
  
  )
}

export default PredectionChart

