import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area } from 'recharts';

interface BusinessMetricsProps {
  type: 'recovery' | 'growth' | 'loss';
  title: string;
  data: Array<{ month: string; value: number }>;
}

const BusinessMetrics: React.FC<BusinessMetricsProps> = ({ type, title, data }) => {
  const getColor = () => {
    switch (type) {
      case 'recovery':
        return 'hsl(195 100% 50%)';
      case 'growth':
        return 'hsl(320 100% 70%)';
      case 'loss':
        return 'hsl(0 84% 60%)';
      default:
        return 'hsl(320 100% 70%)';
    }
  };

  const color = getColor();

  return (
    <div className="chart-container">
      <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">
        {title}
      </h3>
      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          {type === 'loss' ? (
            <AreaChart data={data}>
              <defs>
                <linearGradient id={`gradient-${type}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={color} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
              />
              <YAxis hide />
              <Area
                type="monotone"
                dataKey="value"
                stroke={color}
                strokeWidth={2}
                fill={`url(#gradient-${type})`}
              />
            </AreaChart>
          ) : (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
              />
              <YAxis hide />
              <Line
                type="monotone"
                dataKey="value"
                stroke={color}
                strokeWidth={3}
                dot={{ fill: color, strokeWidth: 0, r: 3 }}
                activeDot={{ r: 5, stroke: color, strokeWidth: 2, fill: 'hsl(var(--background))' }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BusinessMetrics;