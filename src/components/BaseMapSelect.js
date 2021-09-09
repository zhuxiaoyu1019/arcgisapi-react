import React from 'react'
import { Select } from 'antd';

const BaseMapSelect = ({ basemap, setBasemap }) => {
    const { Option } = Select;

    const handleChange = (target) => {
        setBasemap(target.value)
    }

    return (
        <div style={{ position: 'absolute', bottom: 30, left: 30 }}>
            <Select
                labelInValue
                defaultValue={{ value: basemap }}
                style={{ width: 120, opacity: 0.7 }}
                onChange={handleChange}
            >
                <Option value="dark-gray">Dark Gray</Option>
                <Option value="dark-gray-vector">Dark Gray Vector</Option>
                <Option value="gray">Gray</Option>
                <Option value="gray-vector">Gray Vector</Option>
                <Option value="national-geographic">National Geographic</Option>
                <Option value="oceans">Oceans</Option>
                <Option value="osm">OSM</Option>
                <Option value="satellite">Satellite</Option>
                <Option value="streets">Streets</Option>
                <Option value="streets-navigation-vector">Streets Navigation Vector</Option>
                <Option value="streets-night-vector">Streets Night Vector</Option>
                <Option value="streets-relief-vector">Streets Relief Vector</Option>
                <Option value="streets-vector">Streets Vector</Option>
                <Option value="terrain">Terrain</Option>
                <Option value="topo">Topo</Option>
                <Option value="topo-vector">Topo Vector</Option>
            </Select>
        </div>
    )
}

export default BaseMapSelect