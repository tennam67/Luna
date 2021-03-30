import json

import jsonpickle
from django.http import JsonResponse
from rest_framework import serializers
from rest_framework.response import Response

from restaurant.models import Restaurant
from reviews.serializers.serializers_basic import ReviewSerializerWithAuthor

from users.serializers.serializers_basic import UserSerializerBasic



class RestaurantSerializer(serializers.ModelSerializer):

    owner = UserSerializerBasic(read_only=True)
    restaurant_reviews = ReviewSerializerWithAuthor(read_only=True, many=True)

    class Meta:
        model = Restaurant
        fields = ['id',
                  'name',
                  'owner',
                  'country',
                  'city',
                  'zip_code',
                  'street',
                  'latitude',
                  'longitude',
                  'website',
                  'phone',
                  'email',
                  'opening_hours_from',
                  'opening_hours_to',
                  'avatar',
                  'created',
                  'restaurant_reviews',
                  'price_level',
                  'average_rating']


class RestaurantSerializerHome(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['name', 'country', 'city', 'average_rating']


class AllCategoriesSerializer(serializers.ModelSerializer):

    all_categories = serializers.SerializerMethodField()

    def get_all_categories(self, instance):
        return instance.CATEGORIES

    class Meta:
        model = Restaurant
        fields = ['id', 'all_categories']


class BestRatedRestaurantsSerializer(serializers.ModelSerializer):

    # restaurants = Restaurant.objects.all()
    # ordered_restaurants = sorted(restaurants, key=lambda x: x.average_rating, reverse=True)
    #
    # first = serializers.SerializerMethodField()
    # second = serializers.SerializerMethodField()
    # third = serializers.SerializerMethodField()
    # fourth = serializers.SerializerMethodField()
    #
    # def get_first(self, instance):
    #     id = self.ordered_restaurants[0].id
    #     restaurant = list(Restaurant.objects.filter(id=id).values())
    #     response = {'id': restaurant.id,
    #                  'name': restaurant.name,
    #                  'city': restaurant.city,
    #                  'categories': restaurant.categories,
    #                  'price_level': restaurant.price_level,
    #                  'average_rating': restaurant.average_rating
    #                  }
    #     return json.dumps(list(restaurant))
    #
    #
    # def get_second(self, instance):
    #     id = self.ordered_restaurants[0].id
    #     restaurant = Restaurant.objects.get(id=id)
    #     pass
    #
    # def get_third(self, instance):
    #     id = self.ordered_restaurants[0].id
    #     restaurant = Restaurant.objects.get(id=id)
    #     pass
    #
    # def get_fourth(self, instance):
    #     id = self.ordered_restaurants[0].id
    #     restaurant = Restaurant.objects.get(id=id)
    #     pass

    best_four = serializers.SerializerMethodField()

    # owner = UserSerializerBasic(read_only=True)
    # restaurant_reviews = ReviewSerializerWithAuthor(read_only=True, many=True)

    def get_best_four(self, instance):
        restaurants = Restaurant.objects.all()
        ordered_restaurants = sorted(restaurants, key=lambda x: x.average_rating, reverse=True)
        best_four_restaurants = ordered_restaurants[:4]
        # best_four_ids = [ordered_restaurants[0].id,
        #                  ordered_restaurants[1].id,
        #                  ordered_restaurants[2].id,
        #                  ordered_restaurants[3].id]
        # best_four_restaurants = Restaurant.objects.filter(id__in=best_four_ids).all()
        return RestaurantSerializer(best_four_restaurants, many=True).data

    class Meta:
        model = Restaurant
        fields = ['best_four']

        # fields = ['first', 'second', 'third', 'fourth']
        # fields = ['id',
        #           'name',
        #           'owner',
        #           'country',
        #           'city',
        #           'zip_code',
        #           'street',
        #           'website',
        #           'phone',
        #           'email',
        #           'opening_hours_from',
        #           'opening_hours_to',
        #           'avatar',
        #           'created',
        #           'restaurant_reviews',
        #           'price_level',
        #           'average_rating']
