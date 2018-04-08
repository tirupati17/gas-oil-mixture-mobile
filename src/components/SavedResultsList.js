import React from 'react'
import { FlatList, View, Text } from 'react-native'

//helpers
import { GlobalStyles, Constants } from '../assets'
import I18n from '../i18n'

//componenets
import SavedResultsListRow from './SavedResultsListRowHoc'

const SavedResultsList = ({ savedResults, locale }) =>
  <View style={GlobalStyles.materialCard}>
    <Text
      selectable
      style={[
        GlobalStyles.body2,
        GlobalStyles.borderBottomLine,
        GlobalStyles.marginBottomSml,
        { color: Constants.SECONDARY_COLOR },
      ]}
    >
      {I18n.t('savedResults', { locale })}
    </Text>
    <FlatList
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
    />
  </View>

export default SavedResultsList
