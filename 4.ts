function autocomplete(search: string, items: string[], maxResult: number): string[] {
  // Convert search string to lowercase for case-insensitive matching
  const searchLowerCase = search.toLowerCase();

  // Sort the items based on the search criteria
  const sortedItems = items.sort((a, b) => {
    // Check if the item starts with the search string
    const aStartsWithSearch = a.toLowerCase().startsWith(searchLowerCase);
    const bStartsWithSearch = b.toLowerCase().startsWith(searchLowerCase);
    if (aStartsWithSearch && !bStartsWithSearch) return -1;
    if (!aStartsWithSearch && bStartsWithSearch) return 1;

    // Check if the search string is in the middle of the item
    const aIndexOfSearch = a.toLowerCase().indexOf(searchLowerCase);
    const bIndexOfSearch = b.toLowerCase().indexOf(searchLowerCase);
    if (aIndexOfSearch !== -1 && bIndexOfSearch === -1) return -1;
    if (aIndexOfSearch === -1 && bIndexOfSearch !== -1) return 1;
    if (aIndexOfSearch !== -1 && bIndexOfSearch !== -1) {
      if (aIndexOfSearch < bIndexOfSearch) return -1;
      if (aIndexOfSearch > bIndexOfSearch) return 1;
    }

    // Check if the search string is at the end of the item
    const aEndsWithSearch = a.toLowerCase().endsWith(searchLowerCase);
    const bEndsWithSearch = b.toLowerCase().endsWith(searchLowerCase);
    if (aEndsWithSearch && !bEndsWithSearch) return -1;
    if (!aEndsWithSearch && bEndsWithSearch) return 1;

    // If all else fails, use alphabetical order
    return a.localeCompare(b);
  });

  // Return the first `maxResult` items from the sorted list
  return sortedItems.slice(0, maxResult);
}
