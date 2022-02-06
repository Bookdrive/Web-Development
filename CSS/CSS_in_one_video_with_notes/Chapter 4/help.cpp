#include <bits/stdc++.h>
using namespace std;

// 0-1 knapsack variation

bool recHelper(vector<int> mySet, int sum, int index)
{
    if (sum == 0)
    {
        return true;
    }
    if (index < 0)
    {
        return false;
    }
    if (mySet[index] > sum)
    {
        return recHelper(mySet, sum, index - 1);
    }
    else
    {
        return recHelper(mySet, sum, index - 1) || recHelper(mySet, sum - mySet[index], index - 1);
    }
}

bool memoHelper(vector<int> mySet, int sum, int items, vector<vector<int>> &results)
{
    if (items == 0)
    {
        if (sum == 0)
        {
            return results[sum][items] = 1;
        }
        else
        {
            return results[sum][items] = 0;
        }
    }

    if (results[sum][items] != -1)
    {
        return results[sum][items];
    }

    if (mySet[items - 1] > sum)
    {
        return results[sum][items] = memoHelper(mySet, sum, items - 1, results);
    }
    else
    {
        return results[sum][items] = (memoHelper(mySet, sum, items - 1, results) || memoHelper(mySet, sum - mySet[items - 1], items - 1, results));
    }
}

bool memo(vector<int> mySet, int sum)
{
    vector<vector<int>> results(sum + 1, vector<int>(mySet.size() + 1, -1));
    return memoHelper(mySet, sum, mySet.size(), results);
}

bool rec(vector<int> mySet, int sum)
{
    return recHelper(mySet, sum, mySet.size());
}

int main()
{
    vector<int> mySet{2, 4, 1, 3, 5, 7};
    cout << rec(mySet, 11) << memo(mySet, 11);
    return 0;
}