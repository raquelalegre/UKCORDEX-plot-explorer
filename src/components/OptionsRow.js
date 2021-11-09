import React, { useState } from 'react';
import Select from 'react-select';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Some of these might not be relevant anymore
const plotvarOptions = [
  { value: 'fwd', label: 'fwd - Surface Snow Amount' },
  { value: 'tas', label: 'tas - Daily Near-Surface Air Temperature' },
  { value: 'tasmax', label: 'tasmax - Daily Maximum Near-Surface Air Temperature' },
  { value: 'tasmin', label: 'tasmin - Daily Minimum Near-Surface Air Temperature' },
  { value: 'tas99', label: 'tas99 - Daily Near-Surface Air Temperature (Percentile 99)' },
  { value: 'tas01', label: 'tas01 - Daily Near-Surface Air Temperature (Percenrile 1)' },
  { value: 'pr', label: 'pr - Precipitation' },
  { value: 'r99ptot', label: 'r99ptot - r99ptot' },
  { value: 'sfcWind', label: 'sfcWind - Near-Surface Wind Speed' },
  { value: 'rss', label: 'rss - Net surface long wave flux' },
  { value: 'clt', label: 'clt - Total Cloud Fraction' },
  { value: 'prc', label: 'prc - Convective Precipitation' },
  { value: 'tas', label: 'tas - Near-Surface Air Temperature' },
  { value: 'wsgsmax', label: 'wsgsmax - Daily Maximum Near-Surface Wind Speed of Gust' },
  { value: 'psl', label: 'psl - Sea Level Pressure' },
  { value: 'hurs', label: 'hurs - Near-Surface Relative humidity' },
  { value: 'uas', label: 'uas - Eastward Near-Surface Wind' },
  { value: 'vas', label: 'vas - Northward Near-Surface Wind ' },
  { value: 'prsn', label: 'prsn - Snowfall Flux' },
  { value: 'rls', label: 'rls - Net surface long wave flux' }
];

// TODO: This list will be updated as more plots are generated. It covers ~100
// years.
const periodOptions = [
  { value: '19890101-20081231', label: '1989-2008' }
]

// TODO: Check season names are OK with research team as typical users might be
// more familiar with value names e.g. DJF
const seasonOptions = [
  { value: 'DJF', label: 'DJF - Winter' },
  { value: 'MAM', label: 'MAM - Spring' },
  { value: 'JJA', label: 'JJA - Summer' },
  { value: 'SON', label: 'SON - Autumn' }
]

// TODO: More plot types to be added.
const plottypeOptions = [
  { value: 'eval-boxplots', label: 'Box plots' },
  { value: 'eval-maps', label: 'Map plots' },
  { value: 'eval-pca-gcm', label: 'PCA GCM plots' },
  { value: 'eval-pca-rcm', label: 'PCA RCM plots' },
  { value: 'eval-Taylor', label: 'Taylor plots' }
]


function OptionsRow({setPlotvars, setSeasons, setPeriods, setPlottypes}){
/*
  Displays 4 dropdown lists to let user make a selection. Users should be able
  to select several options in each least.
*/
  return(
    <Row className="pt-4">
       <Col>
         <Select
           options={plotvarOptions}
           onChange={setPlotvars}
           placeholder="Select variable"
           isMulti
           />
       </Col>
       <Col>
         <Select
           options={seasonOptions}
           onChange={setSeasons}
           placeholder="Select season"
           isMulti
           />
       </Col>
       <Col>
         <Select
           options={periodOptions}
           onChange={setPeriods}
           placeholder="Select period"
           isMulti
           />
       </Col>
       <Col>
         <Select
           options={plottypeOptions}
           onChange={setPlottypes}
           placeholder="Select plot type"
           isMulti
           />
       </Col>
     </Row>
  );
};

export default OptionsRow;