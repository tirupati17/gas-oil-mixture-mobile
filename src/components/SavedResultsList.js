import React from 'react';
import { FlatList, View } from 'react-native';

//helpers
import { GlobalStyles, Constants } from '../assets';

//componenets
import SavedResultsListRow from './SavedResultsListRowHoc';

const SavedResultsList = ({ savedResults, locale }) =>
  <FlatList
    style={GlobalStyles.materialCard}
    data={savedResults}
    keyExtractor={item => item.id}
    ItemSeparatorComponent={() =>
      <View
        style={[
          { height: 1, backgroundColor: Constants.BORDER },
          GlobalStyles.marginVerticalSml,
        ]}
      />}
    renderItem={({ item }) => <SavedResultsListRow item={item} />}
  />;

export default SavedResultsList;
