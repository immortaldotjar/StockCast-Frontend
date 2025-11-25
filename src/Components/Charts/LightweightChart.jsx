import { createChart, ColorType, AreaSeries } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

const LightChart = ({ data, colors, height = 300 }) => {
    const chartContainerRef = useRef();
    const chartRef = useRef();
    const seriesRef = useRef();

    useEffect(() => {
        chartRef.current = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: colors?.backgroundColor || 'white' },
                textColor: colors?.textColor || 'black',
            },
            width: chartContainerRef.current.clientWidth,
            height,
        });

        chartRef.current.timeScale().fitContent();

        seriesRef.current = chartRef.current.addSeries(AreaSeries,{
            lineColor: colors?.lineColor || '#2962FF',
            topColor: colors?.areaTopColor || '#2962FF',
            bottomColor: colors?.areaBottomColor || 'rgba(41, 98, 255, 0.28)',
        });

        seriesRef.current.setData(data);

        const handleResize = () => {
            chartRef.current.applyOptions({ width: chartContainerRef.current.clientWidth });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chartRef.current.remove();
        };
    }, []);

    useEffect(() => {
        if (seriesRef.current && data.length > 0) {
            seriesRef.current.setData(data);
        }
    }, [data]);

    return <div ref={chartContainerRef} style={{ width: '100%' }} />;
};

export default LightChart;
